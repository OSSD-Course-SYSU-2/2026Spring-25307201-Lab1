/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { VideoPlayer } from '../view/VideoPlayer';
import { DanmakuView } from '../view/DanmakuView';
import { CommentView } from '../view/CommentView';
import {
  MARGIN_FONT_SIZE,
  COMMON_NUM_FONT_WEIGHT,
  ALL_PERCENT,
  STACK_STYLE
} from '../common/constants/CommonConstants';
import { VideoPlayerModel } from '../model/VideoPlayerModel';
import { DanmakuItem, DanmakuManager } from '../model/DanmakuModel';
import { CommentItem, CommentManager } from '../model/CommentModel';
import { VideoLikeModel } from '../model/LikeModel';

@Builder
export function VideoPlayerPageBuilder() {
  VideoPlayerPage()
}

/**
 * Second page.
 */
@Component
export struct VideoPlayerPage {
  private startIconResource: Resource = $r('app.media.ic_public_play');
  private backIconResource: Resource = $r('app.media.ic_back');
  @Provide videoPlayerModel: VideoPlayerModel = new VideoPlayerModel();
  private pathStack: NavPathStack = new NavPathStack();
  @StorageLink('source') source: ResourceStr = '';
  private danmakuManager: DanmakuManager = new DanmakuManager();
  @State displayDanmakuList: DanmakuItem[] = [];
  @State showDanmaku: boolean = true;
  private commentManager: CommentManager = new CommentManager();
  @State commentList: CommentItem[] = [];
  @State showComments: boolean = false;
  private videoLikeModel: VideoLikeModel = new VideoLikeModel('current_video');

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
      new CommentItem('user1', '小明', $r('app.media.ic_public_play'), '这个视频太棒了！', '2小时前'),
      new CommentItem('user2', '小红', $r('app.media.ic_public_play'), '学到了很多新知识', '3小时前'),
      new CommentItem('user3', '小刚', $r('app.media.ic_public_play'), '期待更多内容', '5小时前')
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
    const newComment = new CommentItem(
      'current_user',
      '我',
      $r('app.media.ic_public_play'),
      content,
      '刚刚'
    );
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
      this.displayDanmakuList = this.danmakuManager.getDisplayDanmaku(
        this.videoPlayerModel.currentTime,
        3
      );
    } else {
      this.displayDanmakuList = [];
    }
  }

  build() {
    NavDestination() {
      Column() {
        // 顶部导航栏
        Row() {
          Image(this.backIconResource)
            .width(MARGIN_FONT_SIZE.FOURTH_MARGIN)
            .height(MARGIN_FONT_SIZE.FOURTH_MARGIN)
            .margin({ left: MARGIN_FONT_SIZE.FOURTH_MARGIN })
            .onClick(() => {
              this.pathStack.pop();
            })
          Text($r('app.string.back'))
            .fontColor(Color.White)
            .fontSize(MARGIN_FONT_SIZE.FOURTH_MARGIN)
            .fontWeight(COMMON_NUM_FONT_WEIGHT)
            .margin({ left: MARGIN_FONT_SIZE.FIRST_MARGIN })

          Blank()

          // 弹幕开关按钮
          Row() {
            Text(this.showDanmaku ? '弹幕开' : '弹幕关')
              .fontColor(Color.White)
              .fontSize(MARGIN_FONT_SIZE.SECOND_MARGIN)
              .margin({ right: 8 })
            Circle()
              .width(40)
              .height(24)
              .fill(this.showDanmaku ? '#00FF00' : '#808080')
              .onClick(() => {
                this.showDanmaku = !this.showDanmaku;
                if (!this.showDanmaku) {
                  this.displayDanmakuList = [];
                }
              })
          }
          .margin({ right: MARGIN_FONT_SIZE.FIRST_MARGIN })
        }
        .width(ALL_PERCENT)
        .height(60)
        .margin({
          left: MARGIN_FONT_SIZE.FIRST_MARGIN,
          top: MARGIN_FONT_SIZE.FIRST_MARGIN
        })
        .justifyContent(FlexAlign.Start)

        // 视频播放区域
        Stack() {
          if (!this.videoPlayerModel.isPlay && !this.videoPlayerModel.isLoading) {
            Image(this.startIconResource)
              .width(MARGIN_FONT_SIZE.FIFTH_MARGIN)
              .height(MARGIN_FONT_SIZE.FIFTH_MARGIN)
              .zIndex(STACK_STYLE.IMAGE_Z_INDEX)
          }
          if (this.videoPlayerModel.isLoading) {
            Progress({
              value: STACK_STYLE.PROGRESS_VALUE,
              total: STACK_STYLE.PROGRESS_TOTAL,
              type: ProgressType.ScaleRing
            })
              .color(Color.Grey)
              .value(this.videoPlayerModel.progressVal)
              .width(STACK_STYLE.PROGRESS_WIDTH)
              .style({
                strokeWidth: STACK_STYLE.PROGRESS_STROKE_WIDTH,
                scaleCount: STACK_STYLE.PROGRESS_SCALE_COUNT,
                scaleWidth: STACK_STYLE.PROGRESS_SCALE_WIDTH
              })
              .zIndex(STACK_STYLE.PROGRESS_Z_INDEX)
          }

          // 弹幕层
          if (this.showDanmaku) {
            DanmakuView({
              danmakuList: this.displayDanmakuList
            })
              .position({ x: 0, y: 50 })
              .zIndex(50)
          }

          VideoPlayer({
            source: this.source,
            onTimeUpdate: (currentTime: number) => {
              this.updateDisplayDanmaku();
            }
          })
            .zIndex(0)
        }
        .width(ALL_PERCENT)
        .layoutWeight(1)

        // 评论区域
        if (this.showComments) {
          CommentView({
            commentList: this.commentList,
            onCommentLike: (commentId: string) => {
              this.handleCommentLike(commentId);
            },
            onSendComment: (content: string) => {
              this.handleSendComment(content);
            }
          })
        }

        // 底部控制栏
        Row() {
          // 评论按钮
          Row() {
            Text('评论')
              .fontSize(14)
              .fontColor(Color.White)
              .margin({ right: 4 })
            Text(this.commentList.length.toString())
              .fontSize(14)
              .fontColor(Color.White)
          }
          .width(80)
          .height(36)
          .backgroundColor('rgba(255, 255, 255, 0.2)')
          .borderRadius(18)
          .justifyContent(FlexAlign.Center)
          .margin({ right: 12 })
          .onClick(() => {
            this.showComments = !this.showComments;
          })

          // 点赞按钮
          Row() {
            Image($r('app.media.ic_public_like'))
              .width(16)
              .height(16)
              .fillColor(this.videoLikeModel.isLiked() ? '#FF0000' : '#FFFFFF')
              .margin({ right: 4 })
            Text(this.videoLikeModel.likeCount.toString())
              .fontSize(14)
              .fontColor(this.videoLikeModel.isLiked() ? '#FF0000' : '#FFFFFF')
          }
          .width(80)
          .height(36)
          .backgroundColor(this.videoLikeModel.isLiked() ? 'rgba(255, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)')
          .borderRadius(18)
          .justifyContent(FlexAlign.Center)
          .margin({ right: 12 })
          .onClick(() => {
            this.handleVideoLike();
          })

          // 不喜欢按钮
          Row() {
            Image($r('app.media.ic_public_play'))
              .width(16)
              .height(16)
              .fillColor(this.videoLikeModel.isDisliked() ? '#808080' : '#FFFFFF')
              .margin({ right: 4 })
            Text(this.videoLikeModel.dislikeCount.toString())
              .fontSize(14)
              .fontColor(this.videoLikeModel.isDisliked() ? '#808080' : '#FFFFFF')
          }
          .width(80)
          .height(36)
          .backgroundColor(this.videoLikeModel.isDisliked() ? 'rgba(128, 128, 128, 0.3)' : 'rgba(255, 255, 255, 0.2)')
          .borderRadius(18)
          .justifyContent(FlexAlign.Center)
          .onClick(() => {
            this.handleVideoDislike();
          })
        }
        .width(ALL_PERCENT)
        .height(60)
        .padding({ left: 16, right: 16 })
        .backgroundColor('rgba(0, 0, 0, 0.8)')
        .justifyContent(FlexAlign.Start)
      }
    }
    .hideTitleBar(true)
    .hideToolBar(true)
    .height(ALL_PERCENT)
    .backgroundColor(Color.Black)
    .onReady((context: NavDestinationContext) => {
      this.pathStack = context.pathStack;
    })
  }
}