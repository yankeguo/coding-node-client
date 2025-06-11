# DescribeCodingCIBuildLogData

DescribeCodingCIBuildLog 返回值

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Log** | **string** | 日志 | [optional] [default to '']
**MoreData** | **boolean** | 是否有更多的日志 | [optional] [default to false]
**TextDelivered** | **number** | 当前展示日志长度 | [optional] [default to undefined]
**TextSize** | **number** | 总日志长度 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildLogData } from './api';

const instance: DescribeCodingCIBuildLogData = {
    Log,
    MoreData,
    TextDelivered,
    TextSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
