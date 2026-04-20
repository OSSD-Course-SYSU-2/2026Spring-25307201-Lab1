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
 * 评论项数据模型
 */
export class CommentItem {
    id: string;
    userId: string;
    userName: string;
    avatar: Resource;
    content: string;
    time: string;
    likeCount: number;
    isLiked: boolean;
    replyCount: number;
    constructor(userId: string, userName: string, avatar: Resource, content: string, time: string) {
        this.id = Math.random().toString(36).substring(7);
        this.userId = userId;
        this.userName = userName;
        this.avatar = avatar;
        this.content = content;
        this.time = time;
        this.likeCount = 0;
        this.isLiked = false;
        this.replyCount = 0;
    }
}
/**
 * 评论管理器
 */
export class CommentManager {
    private commentList: CommentItem[] = [];
    /**
     * 添加评论
     */
    addComment(comment: CommentItem): void {
        this.commentList.unshift(comment);
    }
    /**
     * 删除评论
     */
    deleteComment(commentId: string): void {
        this.commentList = this.commentList.filter(comment => comment.id !== commentId);
    }
    /**
     * 点赞评论
     */
    likeComment(commentId: string): void {
        const comment = this.commentList.find(c => c.id === commentId);
        if (comment) {
            if (comment.isLiked) {
                comment.likeCount--;
                comment.isLiked = false;
            }
            else {
                comment.likeCount++;
                comment.isLiked = true;
            }
        }
    }
    /**
     * 获取所有评论
     */
    getAllComments(): CommentItem[] {
        return this.commentList;
    }
    /**
     * 获取评论数量
     */
    getCommentCount(): number {
        return this.commentList.length;
    }
    /**
     * 清空评论
     */
    clearComments(): void {
        this.commentList = [];
    }
}
