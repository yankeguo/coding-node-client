# DescribeCodingCIBuildStepLogData

获取构建某个阶段的日志

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Log** | **string** | 日志 | [optional] [default to '']
**MoreData** | **boolean** | 是否有更多数据 | [optional] [default to false]
**TextDelivered** | **number** | 当前展示总长度 | [optional] [default to undefined]
**TextSize** | **number** | 总长度 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildStepLogData } from './api';

const instance: DescribeCodingCIBuildStepLogData = {
    Log,
    MoreData,
    TextDelivered,
    TextSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
