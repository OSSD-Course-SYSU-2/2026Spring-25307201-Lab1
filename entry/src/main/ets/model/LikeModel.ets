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

/**
 * 点赞/不喜欢状态枚举
 */
export enum LikeStatus {
  NONE = 'none',
  LIKED = 'liked',
  DISLIKED = 'disliked'
}

/**
 * 视频点赞/不喜欢数据模型
 */
export class VideoLikeModel {
  videoId: string;
  likeCount: number;
  dislikeCount: number;
  userStatus: LikeStatus;

  constructor(videoId: string) {
    this.videoId = videoId;
    this.likeCount = 0;
    this.dislikeCount = 0;
    this.userStatus = LikeStatus.NONE;
  }

  /**
   * 点赞
   */
  like(): void {
    if (this.userStatus === LikeStatus.LIKED) {
      // 取消点赞
      this.likeCount--;
      this.userStatus = LikeStatus.NONE;
    } else if (this.userStatus === LikeStatus.DISLIKED) {
      // 从不喜欢切换到点赞
      this.dislikeCount--;
      this.likeCount++;
      this.userStatus = LikeStatus.LIKED;
    } else {
      // 点赞
      this.likeCount++;
      this.userStatus = LikeStatus.LIKED;
    }
  }

  /**
   * 不喜欢
   */
  dislike(): void {
    if (this.userStatus === LikeStatus.DISLIKED) {
      // 取消不喜欢
      this.dislikeCount--;
      this.userStatus = LikeStatus.NONE;
    } else if (this.userStatus === LikeStatus.LIKED) {
      // 从点赞切换到不喜欢
      this.likeCount--;
      this.dislikeCount++;
      this.userStatus = LikeStatus.DISLIKED;
    } else {
      // 不喜欢
      this.dislikeCount++;
      this.userStatus = LikeStatus.DISLIKED;
    }
  }

  /**
   * 获取点赞状态
   */
  isLiked(): boolean {
    return this.userStatus === LikeStatus.LIKED;
  }

  /**
   * 获取不喜欢状态
   */
  isDisliked(): boolean {
    return this.userStatus === LikeStatus.DISLIKED;
  }
}
