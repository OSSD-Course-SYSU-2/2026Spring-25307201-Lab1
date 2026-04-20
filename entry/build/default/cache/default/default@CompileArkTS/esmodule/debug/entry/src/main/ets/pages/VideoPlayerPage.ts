if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VideoPlayerPage_Params {
    startIconResource?: Resource;
    backIconResource?: Resource;
    videoPlayerModel?: VideoPlayerModel;
    pathStack?: NavPathStack;
    source?: ResourceStr;
    danmakuManager?: DanmakuManager;
    displayDanmakuList?: DanmakuItem[];
    showDanmaku?: boolean;
    commentManager?: CommentManager;
    commentList?: CommentItem[];
    showComments?: boolean;
    videoLikeModel?: VideoLikeModel;
}
import { VideoPlayer } from "@bundle:com.example.simplevideo/entry/ets/view/VideoPlayer";
import { DanmakuView } from "@bundle:com.example.simplevideo/entry/ets/view/DanmakuView";
import { CommentView } from "@bundle:com.example.simplevideo/entry/ets/view/CommentView";
import { COMMON_NUM_FONT_WEIGHT, ALL_PERCENT } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
import type { MARGIN_FONT_SIZE, STACK_STYLE } from "@bundle:com.example.simplevideo/entry/ets/common/constants/CommonConstants";
import { VideoPlayerModel } from "@bundle:com.example.simplevideo/entry/ets/model/VideoPlayerModel";
import { DanmakuItem, DanmakuManager } from "@bundle:com.example.simplevideo/entry/ets/model/DanmakuModel";
import { CommentItem, CommentManager } from "@bundle:com.example.simplevideo/entry/ets/model/CommentModel";
import { VideoLikeModel } from "@bundle:com.example.simplevideo/entry/ets/model/LikeModel";
export function VideoPlayerPageBuilder(parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new VideoPlayerPage(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/VideoPlayerPage.ets", line: 32, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {};
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "VideoPlayerPage" });
    }
}
export class VideoPlayerPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.startIconResource = { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.backIconResource = { "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" };
        this.__videoPlayerModel = new ObservedPropertyObjectPU(new VideoPlayerModel(), this, "videoPlayerModel");
        this.addProvidedVar("videoPlayerModel", this.__videoPlayerModel, false);
        this.pathStack = new NavPathStack();
        this.__source = this.createStorageLink('source', '', "source");
        this.danmakuManager = new DanmakuManager();
        this.__displayDanmakuList = new ObservedPropertyObjectPU([], this, "displayDanmakuList");
        this.__showDanmaku = new ObservedPropertySimplePU(true, this, "showDanmaku");
        this.commentManager = new CommentManager();
        this.__commentList = new ObservedPropertyObjectPU([], this, "commentList");
        this.__showComments = new ObservedPropertySimplePU(false, this, "showComments");
        this.videoLikeModel = new VideoLikeModel('current_video');
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoPlayerPage_Params) {
        if (params.startIconResource !== undefined) {
            this.startIconResource = params.startIconResource;
        }
        if (params.backIconResource !== undefined) {
            this.backIconResource = params.backIconResource;
        }
        if (params.videoPlayerModel !== undefined) {
            this.videoPlayerModel = params.videoPlayerModel;
        }
        if (params.pathStack !== undefined) {
            this.pathStack = params.pathStack;
        }
        if (params.danmakuManager !== undefined) {
            this.danmakuManager = params.danmakuManager;
        }
        if (params.displayDanmakuList !== undefined) {
            this.displayDanmakuList = params.displayDanmakuList;
        }
        if (params.showDanmaku !== undefined) {
            this.showDanmaku = params.showDanmaku;
        }
        if (params.commentManager !== undefined) {
            this.commentManager = params.commentManager;
        }
        if (params.commentList !== undefined) {
            this.commentList = params.commentList;
        }
        if (params.showComments !== undefined) {
            this.showComments = params.showComments;
        }
        if (params.videoLikeModel !== undefined) {
            this.videoLikeModel = params.videoLikeModel;
        }
    }
    updateStateVars(params: VideoPlayerPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__videoPlayerModel.purgeDependencyOnElmtId(rmElmtId);
        this.__source.purgeDependencyOnElmtId(rmElmtId);
        this.__displayDanmakuList.purgeDependencyOnElmtId(rmElmtId);
        this.__showDanmaku.purgeDependencyOnElmtId(rmElmtId);
        this.__commentList.purgeDependencyOnElmtId(rmElmtId);
        this.__showComments.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__videoPlayerModel.aboutToBeDeleted();
        this.__source.aboutToBeDeleted();
        this.__displayDanmakuList.aboutToBeDeleted();
        this.__showDanmaku.aboutToBeDeleted();
        this.__commentList.aboutToBeDeleted();
        this.__showComments.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private startIconResource: Resource;
    private backIconResource: Resource;
    private __videoPlayerModel: ObservedPropertyObjectPU<VideoPlayerModel>;
    get videoPlayerModel() {
        return this.__videoPlayerModel.get();
    }
    set videoPlayerModel(newValue: VideoPlayerModel) {
        this.__videoPlayerModel.set(newValue);
    }
    private pathStack: NavPathStack;
    private __source: ObservedPropertyAbstractPU<ResourceStr>;
    get source() {
        return this.__source.get();
    }
    set source(newValue: ResourceStr) {
        this.__source.set(newValue);
    }
    private danmakuManager: DanmakuManager;
    private __displayDanmakuList: ObservedPropertyObjectPU<DanmakuItem[]>;
    get displayDanmakuList() {
        return this.__displayDanmakuList.get();
    }
    set displayDanmakuList(newValue: DanmakuItem[]) {
        this.__displayDanmakuList.set(newValue);
    }
    private __showDanmaku: ObservedPropertySimplePU<boolean>;
    get showDanmaku() {
        return this.__showDanmaku.get();
    }
    set showDanmaku(newValue: boolean) {
        this.__showDanmaku.set(newValue);
    }
    private commentManager: CommentManager;
    private __commentList: ObservedPropertyObjectPU<CommentItem[]>;
    get commentList() {
        return this.__commentList.get();
    }
    set commentList(newValue: CommentItem[]) {
        this.__commentList.set(newValue);
    }
    private __showComments: ObservedPropertySimplePU<boolean>;
    get showComments() {
        return this.__showComments.get();
    }
    set showComments(newValue: boolean) {
        this.__showComments.set(newValue);
    }
    private videoLikeModel: VideoLikeModel;
    onPageHide() {
        this.videoPlayerModel.controller.pause();
    }
    aboutToAppear() {
        // 初始化一些示例弹幕
        this.initSampleDanmaku();
        // 初始化一些示例评论
        this.initSampleComments();
        // 初始化一些示例点赞数
        this.initSampleLikes();
    }
    /**
     * 初始化示例弹幕
     */
    private initSampleDanmaku(): void {
        const sampleDanmaku = [
            new DanmakuItem('太精彩了！', 2, '#FFFFFF', 16),
            new DanmakuItem('这个视频做得很好', 5, '#FFFF00', 18),
            new DanmakuItem('666666', 8, '#FF00FF', 16),
            new DanmakuItem('学到了', 10, '#00FF00', 16),
            new DanmakuItem('再来一个', 12, '#00FFFF', 18),
            new DanmakuItem('太棒了', 15, '#FF6600', 16),
            new DanmakuItem('收藏了', 18, '#FFFFFF', 16),
            new DanmakuItem('必须点赞', 20, '#FF0000', 18)
        ];
        sampleDanmaku.forEach(danmaku => {
            this.danmakuManager.addDanmaku(danmaku);
        });
    }
    /**
     * 初始化示例评论
     */
    private initSampleComments(): void {
        const sampleComments = [
            new CommentItem('user1', '小明', { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '这个视频太棒了！', '2小时前'),
            new CommentItem('user2', '小红', { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '学到了很多新知识', '3小时前'),
            new CommentItem('user3', '小刚', { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, '期待更多内容', '5小时前')
        ];
        sampleComments.forEach(comment => {
            this.commentManager.addComment(comment);
        });
        this.commentList = this.commentManager.getAllComments();
    }
    /**
     * 初始化示例点赞数
     */
    private initSampleLikes(): void {
        this.videoLikeModel.likeCount = 1234;
        this.videoLikeModel.dislikeCount = 12;
    }
    /**
     * 点赞评论
     */
    private handleCommentLike(commentId: string): void {
        this.commentManager.likeComment(commentId);
        this.commentList = this.commentManager.getAllComments();
    }
    /**
     * 发送评论
     */
    private handleSendComment(content: string): void {
        const newComment = new CommentItem('current_user', '我', { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" }, content, '刚刚');
        this.commentManager.addComment(newComment);
        this.commentList = this.commentManager.getAllComments();
    }
    /**
     * 点赞视频
     */
    private handleVideoLike(): void {
        this.videoLikeModel.like();
    }
    /**
     * 不喜欢视频
     */
    private handleVideoDislike(): void {
        this.videoLikeModel.dislike();
    }
    /**
     * 更新显示的弹幕
     */
    private updateDisplayDanmaku(): void {
        if (this.showDanmaku && this.videoPlayerModel.isPlay) {
            this.displayDanmakuList = this.danmakuManager.getDisplayDanmaku(this.videoPlayerModel.currentTime, 3);
        }
        else {
            this.displayDanmakuList = [];
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 顶部导航栏
                    Row.create();
                    // 顶部导航栏
                    Row.width(ALL_PERCENT);
                    // 顶部导航栏
                    Row.height(60);
                    // 顶部导航栏
                    Row.margin({
                        left: 12,
                        top: 12
                    });
                    // 顶部导航栏
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(this.backIconResource);
                    Image.width(24);
                    Image.height(24);
                    Image.margin({ left: 24 });
                    Image.onClick(() => {
                        this.pathStack.pop();
                    });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
                    Text.fontColor(Color.White);
                    Text.fontSize(24);
                    Text.fontWeight(COMMON_NUM_FONT_WEIGHT);
                    Text.margin({ left: 12 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 弹幕开关按钮
                    Row.create();
                    // 弹幕开关按钮
                    Row.margin({ right: 12 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.showDanmaku ? '弹幕开' : '弹幕关');
                    Text.fontColor(Color.White);
                    Text.fontSize(16);
                    Text.margin({ right: 8 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Circle.create();
                    Circle.width(40);
                    Circle.height(24);
                    Circle.fill(this.showDanmaku ? '#00FF00' : '#808080');
                    Circle.onClick(() => {
                        this.showDanmaku = !this.showDanmaku;
                        if (!this.showDanmaku) {
                            this.displayDanmakuList = [];
                        }
                    });
                }, Circle);
                // 弹幕开关按钮
                Row.pop();
                // 顶部导航栏
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 视频播放区域
                    Stack.create();
                    // 视频播放区域
                    Stack.width(ALL_PERCENT);
                    // 视频播放区域
                    Stack.layoutWeight(1);
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (!this.videoPlayerModel.isPlay && !this.videoPlayerModel.isLoading) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create(this.startIconResource);
                                Image.width(50);
                                Image.height(50);
                                Image.zIndex(2);
                            }, Image);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.videoPlayerModel.isLoading) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Progress.create({
                                    value: 0,
                                    total: 100,
                                    type: ProgressType.ScaleRing
                                });
                                Progress.color(Color.Grey);
                                Progress.value(this.videoPlayerModel.progressVal);
                                Progress.width(80);
                                Progress.style({
                                    strokeWidth: 15,
                                    scaleCount: 15,
                                    scaleWidth: 5
                                });
                                Progress.zIndex(1);
                            }, Progress);
                        });
                    }
                    // 弹幕层
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    // 弹幕层
                    if (this.showDanmaku) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.position({ x: 0, y: 50 });
                                __Common__.zIndex(50);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new DanmakuView(this, {
                                            danmakuList: this.displayDanmakuList
                                        }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/VideoPlayerPage.ets", line: 235, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                danmakuList: this.displayDanmakuList
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            danmakuList: this.displayDanmakuList
                                        });
                                    }
                                }, { name: "DanmakuView" });
                            }
                            __Common__.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.zIndex(0);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new VideoPlayer(this, {
                                source: this.source,
                                onTimeUpdate: (currentTime: number) => {
                                    this.updateDisplayDanmaku();
                                }
                            }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/VideoPlayerPage.ets", line: 242, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    source: this.source,
                                    onTimeUpdate: (currentTime: number) => {
                                        this.updateDisplayDanmaku();
                                    }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "VideoPlayer" });
                }
                __Common__.pop();
                // 视频播放区域
                Stack.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    // 评论区域
                    if (this.showComments) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new CommentView(this, {
                                            commentList: this.commentList,
                                            onCommentLike: (commentId: string) => {
                                                this.handleCommentLike(commentId);
                                            },
                                            onSendComment: (content: string) => {
                                                this.handleSendComment(content);
                                            }
                                        }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/VideoPlayerPage.ets", line: 255, col: 11 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                commentList: this.commentList,
                                                onCommentLike: (commentId: string) => {
                                                    this.handleCommentLike(commentId);
                                                },
                                                onSendComment: (content: string) => {
                                                    this.handleSendComment(content);
                                                }
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            commentList: this.commentList
                                        });
                                    }
                                }, { name: "CommentView" });
                            }
                        });
                    }
                    // 底部控制栏
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 底部控制栏
                    Row.create();
                    // 底部控制栏
                    Row.width(ALL_PERCENT);
                    // 底部控制栏
                    Row.height(60);
                    // 底部控制栏
                    Row.padding({ left: 16, right: 16 });
                    // 底部控制栏
                    Row.backgroundColor('rgba(0, 0, 0, 0.8)');
                    // 底部控制栏
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 评论按钮
                    Row.create();
                    // 评论按钮
                    Row.width(80);
                    // 评论按钮
                    Row.height(36);
                    // 评论按钮
                    Row.backgroundColor('rgba(255, 255, 255, 0.2)');
                    // 评论按钮
                    Row.borderRadius(18);
                    // 评论按钮
                    Row.justifyContent(FlexAlign.Center);
                    // 评论按钮
                    Row.margin({ right: 12 });
                    // 评论按钮
                    Row.onClick(() => {
                        this.showComments = !this.showComments;
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('评论');
                    Text.fontSize(14);
                    Text.fontColor(Color.White);
                    Text.margin({ right: 4 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.commentList.length.toString());
                    Text.fontSize(14);
                    Text.fontColor(Color.White);
                }, Text);
                Text.pop();
                // 评论按钮
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 点赞按钮
                    Row.create();
                    // 点赞按钮
                    Row.width(80);
                    // 点赞按钮
                    Row.height(36);
                    // 点赞按钮
                    Row.backgroundColor(this.videoLikeModel.isLiked() ? 'rgba(255, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)');
                    // 点赞按钮
                    Row.borderRadius(18);
                    // 点赞按钮
                    Row.justifyContent(FlexAlign.Center);
                    // 点赞按钮
                    Row.margin({ right: 12 });
                    // 点赞按钮
                    Row.onClick(() => {
                        this.handleVideoLike();
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
                    Image.width(16);
                    Image.height(16);
                    Image.fillColor(this.videoLikeModel.isLiked() ? '#FF0000' : '#FFFFFF');
                    Image.margin({ right: 4 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.videoLikeModel.likeCount.toString());
                    Text.fontSize(14);
                    Text.fontColor(this.videoLikeModel.isLiked() ? '#FF0000' : '#FFFFFF');
                }, Text);
                Text.pop();
                // 点赞按钮
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 不喜欢按钮
                    Row.create();
                    // 不喜欢按钮
                    Row.width(80);
                    // 不喜欢按钮
                    Row.height(36);
                    // 不喜欢按钮
                    Row.backgroundColor(this.videoLikeModel.isDisliked() ? 'rgba(128, 128, 128, 0.3)' : 'rgba(255, 255, 255, 0.2)');
                    // 不喜欢按钮
                    Row.borderRadius(18);
                    // 不喜欢按钮
                    Row.justifyContent(FlexAlign.Center);
                    // 不喜欢按钮
                    Row.onClick(() => {
                        this.handleVideoDislike();
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.simplevideo", "moduleName": "entry" });
                    Image.width(16);
                    Image.height(16);
                    Image.fillColor(this.videoLikeModel.isDisliked() ? '#808080' : '#FFFFFF');
                    Image.margin({ right: 4 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.videoLikeModel.dislikeCount.toString());
                    Text.fontSize(14);
                    Text.fontColor(this.videoLikeModel.isDisliked() ? '#808080' : '#FFFFFF');
                }, Text);
                Text.pop();
                // 不喜欢按钮
                Row.pop();
                // 底部控制栏
                Row.pop();
                Column.pop();
            }, { moduleName: "entry", pagePath: "entry/src/main/ets/pages/VideoPlayerPage" });
            NavDestination.hideTitleBar(true);
            NavDestination.hideToolBar(true);
            NavDestination.height(ALL_PERCENT);
            NavDestination.backgroundColor(Color.Black);
            NavDestination.onReady((context: NavDestinationContext) => {
                this.pathStack = context.pathStack;
            });
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("VideoPlayerPage", wrapBuilder(VideoPlayerPageBuilder));
    }
})();
