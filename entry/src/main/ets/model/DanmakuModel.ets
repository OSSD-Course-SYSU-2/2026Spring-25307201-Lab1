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
 * 弹幕项数据模型
 */
export class DanmakuItem {
  id: string;
  text: string;
  time: number;
  color: string;
  fontSize: number;

  constructor(text: string, time: number, color?: string, fontSize?: number) {
    this.id = Math.random().toString(36).substring(7);
    this.text = text;
    this.time = time;
    this.color = color || '#FFFFFF';
    this.fontSize = fontSize || 16;
  }
}

/**
 * 弹幕管理器
 */
export class DanmakuManager {
  private danmakuList: DanmakuItem[] = [];
  private displayDanmakuList: DanmakuItem[] = [];

  /**
   * 添加弹幕
   */
  addDanmaku(danmaku: DanmakuItem): void {
    this.danmakuList.push(danmaku);
  }

  /**
   * 根据时间获取当前应该显示的弹幕
   */
  getDisplayDanmaku(currentTime: number, timeWindow: number = 3): DanmakuItem[] {
    this.displayDanmakuList = this.danmakuList.filter(danmaku =>
      danmaku.time >= currentTime && danmaku.time < currentTime + timeWindow
    );
    return this.displayDanmakuList;
  }

  /**
   * 清空弹幕
   */
  clearDanmaku(): void {
    this.danmakuList = [];
    this.displayDanmakuList = [];
  }

  /**
   * 获取所有弹幕
   */
  getAllDanmaku(): DanmakuItem[] {
    return this.danmakuList;
  }
}
