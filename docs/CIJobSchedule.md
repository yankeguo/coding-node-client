# CIJobSchedule

针对 CRON TriggerMethod 的设置

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Branch** | **string** | 要触发的分支 | [default to '']
**EndTime** | **string** | 结束时间。如果是单次触发，结束时间为空 | [default to '']
**Interval** | **string** | 间隔 | [default to '']
**RefChangeTrigger** | **boolean** | 代码无变化时是否触发 | [default to false]
**Repeat** | **boolean** | 是否周期触发（周期触发/单次触发） | [default to false]
**StartTime** | **string** | 开始时间。如果是周期触发，精确到小时（ 8 ）如果是单次触发，精确到分钟数（ 8:20 ） | [default to '']
**Weekend** | **string** | 星期几 | [default to '']

## Example

```typescript
import { CIJobSchedule } from './api';

const instance: CIJobSchedule = {
    Branch,
    EndTime,
    Interval,
    RefChangeTrigger,
    Repeat,
    StartTime,
    Weekend,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
