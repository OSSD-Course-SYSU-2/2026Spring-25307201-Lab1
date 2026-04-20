if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VideoPlayer_Params {
    videoPlayerModel?: VideoPlayerModel;
    previewUris?: Resource;
    source?: ResourceStr;
    onTimeUpdate?: (currentTime: number) => void;
}
import { VideoSlider } from "@bundle:com.example.simplevideo/entry/ets/view/VideoPlaySlider";
import { prepared, finish, changeSliderTime } from "@bundle:com.example.simplevideo/entry/ets/model/VideoControll";
import { COMMON_NUM_DURATION, ALL_PERCENT } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
import type { STRING_PERCENT } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
import type { VideoPlayerModel } from '../model/VideoPlayerModel';
export class VideoPlayer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__videoPlayerModel = this.initializeConsume("videoPlayerModel", "videoPlayerModel");
        this.previewUris = { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.source = '';
        this.onTimeUpdate = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoPlayer_Params) {
        if (params.previewUris !== undefined) {
            this.previewUris = params.previewUris;
        }
        if (params.source !== undefined) {
            this.source = params.source;
        }
        if (params.onTimeUpdate !== undefined) {
            this.onTimeUpdate = params.onTimeUpdate;
        }
    }
    updateStateVars(params: VideoPlayer_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__videoPlayerModel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__videoPlayerModel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __videoPlayerModel: ObservedPropertyAbstractPU<VideoPlayerModel>;
    get videoPlayerModel() {
        return this.__videoPlayerModel.get();
    }
    set videoPlayerModel(newValue: VideoPlayerModel) {
        this.__videoPlayerModel.set(newValue);
    }
    private previewUris: Resource;
    private source: ResourceStr;
    private onTimeUpdate?: (currentTime: number) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Video.create({
                src: this.source,
                previewUri: this.previewUris,
                controller: this.videoPlayerModel.controller
            });
            Video.width(ALL_PERCENT);
            Video.height("88%");
            Video.controls(false);
            Video.autoPlay(false);
            Video.objectFit(ImageFit.Contain);
            Video.loop(false);
            Video.onUpdate((event) => {
                this.videoPlayerModel.currentTime = event.time;
                this.videoPlayerModel.currentStringTime = changeSliderTime(this.videoPlayerModel.currentTime);
                // 通知父组件更新弹幕
                if (this.onTimeUpdate) {
                    this.onTimeUpdate(this.videoPlayerModel.currentTime);
                }
            });
            Video.onPrepared((event?: DurationObject) => {
                if (event !== undefined) {
                    prepared(this.videoPlayerModel, event);
                }
            });
            Video.onFinish(() => {
                finish(this.videoPlayerModel);
            });
            Video.onError(() => {
                this.getUIContext().getPromptAction().showToast({
                    duration: COMMON_NUM_DURATION,
                    message: { "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }
                });
            });
        }, Video);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new VideoSlider(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/VideoPlayer.ets", line: 71, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "VideoSlider" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export interface DurationObject {
    duration: number;
}
