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

import { CommentItem } from '../model/CommentModel';
import { MARGIN_FONT_SIZE, COMMON_NUM_FONT_WEIGHT, ALL_PERCENT } from '../common/constants/CommonConstants';

/**
 * 评论项组件
 */
@Component
export struct CommentItemView {
  @Prop comment: CommentItem;
  onLike?: (commentId: string) => void;

  build() {
    Row() {
      // 头像
      Image(this.comment.avatar)
        .width(40)
        .height(40)
        .borderRadius(20)
        .margin({ right: 12 })

      Column() {
        // 用户名和时间
        Row() {
          Text(this.comment.userName)
            .fontSize(14)
            .fontColor('#999999')
            .fontWeight(COMMON_NUM_FONT_WEIGHT)

          Blank()

          Text(this.comment.time)
            .fontSize(12)
            .fontColor('#999999')
        }
        .width(ALL_PERCENT)
        .margin({ bottom: 6 })

        // 评论内容
        Text(this.comment.content)
          .fontSize(16)
          .fontColor('#FFFFFF')
          .margin({ bottom: 8 })
        // 点赞数
        Row() {
          Image(this.comment.isLiked ? $r('app.media.ic_public_play') : $r('app.media.ic_public_play'))
            .width(16)
            .height(16)
            .fillColor(this.comment.isLiked ? '#FF0000' : '#999999')
            .margin({ right: 4 })

          Text(this.comment.likeCount.toString())
            .fontSize(12)
            .fontColor(this.comment.isLiked ? '#FF0000' : '#999999')
        }
        .onClick(() => {
          if (this.onLike) {
            this.onLike(this.comment.id);
          }
        })
      }
      .alignItems(HorizontalAlign.Start)
      .layoutWeight(1)
    }
    .width(ALL_PERCENT)
    .padding(12)
    .backgroundColor('rgba(255, 255, 255, 0.05)')
    .borderRadius(8)
    .margin({ bottom: 8 })
  }
}

/**
 * 评论列表组件
 */
@Component
export struct CommentView {
  @Prop commentList: CommentItem[] = [];
  onCommentLike?: (commentId: string) => void;
  onSendComment?: (content: string) => void;

  @State inputText: string = '';

  build() {
    Column() {
      // 评论标题
      Row() {
        Text(`评论 (${this.commentList.length})`)
          .fontSize(18)
          .fontColor('#FFFFFF')
          .fontWeight(COMMON_NUM_FONT_WEIGHT)
      }
      .width(ALL_PERCENT)
      .padding({ left: 16, right: 16, top: 12, bottom: 12 })
      .backgroundColor('rgba(0, 0, 0, 0.3)')

      // 评论列表
      List() {
        ForEach(this.commentList, (comment: CommentItem) => {
          ListItem() {
            CommentItemView({
              comment: comment,
              onLike: this.onCommentLike
            })
          }
        })
      }
      .width(ALL_PERCENT)
      .layoutWeight(1)
      .padding({ left: 12, right: 12 })
      .backgroundColor('rgba(0, 0, 0, 0.5)')

      // 输入框
      Row() {
        TextInput({ placeholder: '发表评论...', text: this.inputText })
          .layoutWeight(1)
          .height(40)
          .backgroundColor('rgba(255, 255, 255, 0.1)')
          .borderRadius(20)
          .placeholderColor('#999999')
          .fontColor('#FFFFFF')
          .onChange((value: string) => {
            this.inputText = value;
          })
          .margin({ right: 12 })

        Button('发送')
          .height(40)
          .backgroundColor('#FF0000')
          .borderRadius(20)
          .onClick(() => {
            if (this.inputText.trim() && this.onSendComment) {
              this.onSendComment(this.inputText.trim());
              this.inputText = '';
            }
          })
      }
      .width(ALL_PERCENT)
      .padding(12)
      .backgroundColor('rgba(0, 0, 0, 0.8)')
    }
    .width(ALL_PERCENT)
    .height(400)
    .backgroundColor('rgba(0, 0, 0, 0.9)')
  }
}
