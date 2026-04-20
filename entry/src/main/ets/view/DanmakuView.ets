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

import { DanmakuItem } from '../model/DanmakuModel';
import { ALL_PERCENT } from '../common/constants/CommonConstants';

/**
 * 弹幕视图组件
 */
@Component
export struct DanmakuView {
  @Prop danmakuList: DanmakuItem[] = [];
  @State private danmakuTracks: DanmakuItem[][] = [[], [], [], [], []]; // 5条弹幕轨道
  private trackCount: number = 5;

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

  build() {
    Column() {
      // 弹幕轨道
      ForEach(this.danmakuTracks, (track: DanmakuItem[], trackIndex: number) => {
        Row() {
          ForEach(track, (danmaku: DanmakuItem, index: number) => {
            Text(danmaku.text)
              .fontSize(danmaku.fontSize)
              .fontColor(danmaku.color)
              .padding({ left: 8, right: 8, top: 4, bottom: 4 })
              .borderRadius(12)
              .backgroundColor('rgba(0, 0, 0, 0.3)')
              .maxLines(1)
              .textOverflow({ overflow: TextOverflow.Ellipsis })
              .animation({
                duration: this.getAnimationDuration(danmaku),
                curve: Curve.Linear,
                iterations: 1,
                playMode: PlayMode.Normal
              })
              .translate({ x: 0, y: 0 })
              .onAppear(() => {
                // 弹幕从右向左移动
                setTimeout(() => {
                  // 这里需要实际的动画实现
                }, index * 200);
              })
          })
        }
        .width(ALL_PERCENT)
        .height(24)
        .justifyContent(FlexAlign.Start)
      })
    }
    .width(ALL_PERCENT)
    .height(120)
    .position({ x: 0, y: 0 })
    .zIndex(100)
    .onAppear(() => {
      this.distributeDanmaku();
    })
  }
}
