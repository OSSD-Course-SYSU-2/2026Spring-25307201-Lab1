if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentView_Params {
    commentList?: CommentItem[];
    onCommentLike?: (commentId: string) => void;
    onSendComment?: (content: string) => void;
    inputText?: string;
}
interface CommentItemView_Params {
    comment?: CommentItem;
    onLike?: (commentId: string) => void;
}
import type { CommentItem } from '../model/CommentModel';
import { COMMON_NUM_FONT_WEIGHT, ALL_PERCENT } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
export class CommentItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__comment = new SynchedPropertyObjectOneWayPU(params.comment, this, "comment");
        this.onLike = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentItemView_Params) {
        if (params.onLike !== undefined) {
            this.onLike = params.onLike;
        }
    }
    updateStateVars(params: CommentItemView_Params) {
        this.__comment.reset(params.comment);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__comment.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__comment.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __comment: SynchedPropertySimpleOneWayPU<CommentItem>;
    get comment() {
        return this.__comment.get();
    }
    set comment(newValue: CommentItem) {
        this.__comment.set(newValue);
    }
    private onLike?: (commentId: string) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(ALL_PERCENT);
            Row.padding(12);
            Row.backgroundColor('rgba(255, 255, 255, 0.05)');
            Row.borderRadius(8);
            Row.margin({ bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 头像
            Image.create(this.comment.avatar);
            // 头像
            Image.width(40);
            // 头像
            Image.height(40);
            // 头像
            Image.borderRadius(20);
            // 头像
            Image.margin({ right: 12 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户名和时间
            Row.create();
            // 用户名和时间
            Row.width(ALL_PERCENT);
            // 用户名和时间
            Row.margin({ bottom: 6 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.comment.userName);
            Text.fontSize(14);
            Text.fontColor('#999999');
            Text.fontWeight(COMMON_NUM_FONT_WEIGHT);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.comment.time);
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        // 用户名和时间
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 评论内容
            Text.create(this.comment.content);
            // 评论内容
            Text.fontSize(16);
            // 评论内容
            Text.fontColor('#FFFFFF');
            // 评论内容
            Text.margin({ bottom: 8 });
        }, Text);
        // 评论内容
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 点赞数
            Row.create();
            // 点赞数
            Row.onClick(() => {
                if (this.onLike) {
                    this.onLike(this.comment.id);
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.comment.isLiked ? { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" } : { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
            Image.width(16);
            Image.height(16);
            Image.fillColor(this.comment.isLiked ? '#FF0000' : '#999999');
            Image.margin({ right: 4 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.comment.likeCount.toString());
            Text.fontSize(12);
            Text.fontColor(this.comment.isLiked ? '#FF0000' : '#999999');
        }, Text);
        Text.pop();
        // 点赞数
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class CommentView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__commentList = new SynchedPropertyObjectOneWayPU(params.commentList, this, "commentList");
        this.onCommentLike = undefined;
        this.onSendComment = undefined;
        this.__inputText = new ObservedPropertySimplePU('', this, "inputText");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentView_Params) {
        if (params.commentList === undefined) {
            this.__commentList.set([]);
        }
        if (params.onCommentLike !== undefined) {
            this.onCommentLike = params.onCommentLike;
        }
        if (params.onSendComment !== undefined) {
            this.onSendComment = params.onSendComment;
        }
        if (params.inputText !== undefined) {
            this.inputText = params.inputText;
        }
    }
    updateStateVars(params: CommentView_Params) {
        this.__commentList.reset(params.commentList);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commentList.purgeDependencyOnElmtId(rmElmtId);
        this.__inputText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commentList.aboutToBeDeleted();
        this.__inputText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __commentList: SynchedPropertySimpleOneWayPU<CommentItem[]>;
    get commentList() {
        return this.__commentList.get();
    }
    set commentList(newValue: CommentItem[]) {
        this.__commentList.set(newValue);
    }
    private onCommentLike?: (commentId: string) => void;
    private onSendComment?: (content: string) => void;
    private __inputText: ObservedPropertySimplePU<string>;
    get inputText() {
        return this.__inputText.get();
    }
    set inputText(newValue: string) {
        this.__inputText.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(ALL_PERCENT);
            Column.height(400);
            Column.backgroundColor('rgba(0, 0, 0, 0.9)');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 评论标题
            Row.create();
            // 评论标题
            Row.width(ALL_PERCENT);
            // 评论标题
            Row.padding({ left: 16, right: 16, top: 12, bottom: 12 });
            // 评论标题
            Row.backgroundColor('rgba(0, 0, 0, 0.3)');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`评论 (${this.commentList.length})`);
            Text.fontSize(18);
            Text.fontColor('#FFFFFF');
            Text.fontWeight(COMMON_NUM_FONT_WEIGHT);
        }, Text);
        Text.pop();
        // 评论标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 评论列表
            List.create();
            // 评论列表
            List.width(ALL_PERCENT);
            // 评论列表
            List.layoutWeight(1);
            // 评论列表
            List.padding({ left: 12, right: 12 });
            // 评论列表
            List.backgroundColor('rgba(0, 0, 0, 0.5)');
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const comment = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new CommentItemView(this, {
                                        comment: comment,
                                        onLike: this.onCommentLike
                                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/CommentView.ets", line: 115, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            comment: comment,
                                            onLike: this.onCommentLike
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        comment: comment
                                    });
                                }
                            }, { name: "CommentItemView" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.commentList, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 评论列表
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 输入框
            Row.create();
            // 输入框
            Row.width(ALL_PERCENT);
            // 输入框
            Row.padding(12);
            // 输入框
            Row.backgroundColor('rgba(0, 0, 0, 0.8)');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '发表评论...', text: this.inputText });
            TextInput.layoutWeight(1);
            TextInput.height(40);
            TextInput.backgroundColor('rgba(255, 255, 255, 0.1)');
            TextInput.borderRadius(20);
            TextInput.placeholderColor('#999999');
            TextInput.fontColor('#FFFFFF');
            TextInput.onChange((value: string) => {
                this.inputText = value;
            });
            TextInput.margin({ right: 12 });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('发送');
            Button.height(40);
            Button.backgroundColor('#FF0000');
            Button.borderRadius(20);
            Button.onClick(() => {
                if (this.inputText.trim() && this.onSendComment) {
                    this.onSendComment(this.inputText.trim());
                    this.inputText = '';
                }
            });
        }, Button);
        Button.pop();
        // 输入框
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
