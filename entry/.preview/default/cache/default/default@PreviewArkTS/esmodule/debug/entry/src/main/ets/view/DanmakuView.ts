if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DanmakuView_Params {
    danmakuList?: DanmakuItem[];
    danmakuTracks?: DanmakuItem[][];
    trackCount?: number;
}
import type { DanmakuItem } from '../model/DanmakuModel';
import { ALL_PERCENT } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
export class DanmakuView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__danmakuList = new SynchedPropertyObjectOneWayPU(params.danmakuList, this, "danmakuList");
        this.__danmakuTracks = new ObservedPropertyObjectPU([[], [], [], [], []], this, "danmakuTracks");
        this.trackCount = 5;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DanmakuView_Params) {
        if (params.danmakuList === undefined) {
            this.__danmakuList.set([]);
        }
        if (params.danmakuTracks !== undefined) {
            this.danmakuTracks = params.danmakuTracks;
        }
        if (params.trackCount !== undefined) {
            this.trackCount = params.trackCount;
        }
    }
    updateStateVars(params: DanmakuView_Params) {
        this.__danmakuList.reset(params.danmakuList);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__danmakuList.purgeDependencyOnElmtId(rmElmtId);
        this.__danmakuTracks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__danmakuList.aboutToBeDeleted();
        this.__danmakuTracks.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __danmakuList: SynchedPropertySimpleOneWayPU<DanmakuItem[]>;
    get danmakuList() {
        return this.__danmakuList.get();
    }
    set danmakuList(newValue: DanmakuItem[]) {
        this.__danmakuList.set(newValue);
    }
    private __danmakuTracks: ObservedPropertyObjectPU<DanmakuItem[][]>; // 5条弹幕轨道
    get danmakuTracks() {
        return this.__danmakuTracks.get();
    }
    set danmakuTracks(newValue: DanmakuItem[][]) {
        this.__danmakuTracks.set(newValue);
    }
    private trackCount: number;
    /**
     * 将弹幕分配到不同的轨道上
     */
    private distributeDanmaku(): void {
        // 清空所有轨道
        this.danmakuTracks = Array(this.trackCount).fill(null).map(() => []);
        // 将弹幕分配到轨道
        this.danmakuList.forEach((danmaku, index) => {
            const trackIndex = index % this.trackCount;
            this.danmakuTracks[trackIndex].push(danmaku);
        });
    }
    /**
     * 获取弹幕动画时长（根据文本长度）
     */
    private getAnimationDuration(danmaku: DanmakuItem): number {
        const baseDuration = 8000;
        const textLength = danmaku.text.length;
        return baseDuration + textLength * 100;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/DanmakuView.ets(52:5)", "entry");
            Column.width(ALL_PERCENT);
            Column.height(120);
            Column.position({ x: 0, y: 0 });
            Column.zIndex(100);
            Column.onAppear(() => {
                this.distributeDanmaku();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 弹幕轨道
            ForEach.create();
            const forEachItemGenFunction = (_item, trackIndex: number) => {
                const track = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/view/DanmakuView.ets(55:9)", "entry");
                    Row.width(ALL_PERCENT);
                    Row.height(24);
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index: number) => {
                        const danmaku = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(danmaku.text);
                            Text.debugLine("entry/src/main/ets/view/DanmakuView.ets(57:13)", "entry");
                            Context.animation({
                                duration: this.getAnimationDuration(danmaku),
                                curve: Curve.Linear,
                                iterations: 1,
                                playMode: PlayMode.Normal
                            });
                            Text.fontSize(danmaku.fontSize);
                            Text.fontColor(danmaku.color);
                            Text.padding({ left: 8, right: 8, top: 4, bottom: 4 });
                            Text.borderRadius(12);
                            Text.backgroundColor('rgba(0, 0, 0, 0.3)');
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Context.animation(null);
                            Text.translate({ x: 0, y: 0 });
                            Text.onAppear(() => {
                                // 弹幕从右向左移动
                                setTimeout(() => {
                                    // 这里需要实际的动画实现
                                }, index * 200);
                            });
                        }, Text);
                        Text.pop();
                    };
                    this.forEachUpdateFunction(elmtId, track, forEachItemGenFunction, undefined, true, false);
                }, ForEach);
                ForEach.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.danmakuTracks, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        // 弹幕轨道
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
