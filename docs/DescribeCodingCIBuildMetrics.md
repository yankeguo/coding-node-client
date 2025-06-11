# DescribeCodingCIBuildMetrics

DescribeCodingCIBuildMetrics 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **string** | 日期 | [optional] [default to '']
**SuccessBuildCount** | **number** | 构建成功总数 | [optional] [default to undefined]
**TotalBuildCount** | **number** | 构建总数 | [optional] [default to undefined]
**TotalDuration** | **number** | 构建总耗时，单位毫秒 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildMetrics } from './api';

const instance: DescribeCodingCIBuildMetrics = {
    Date,
    SuccessBuildCount,
    TotalBuildCount,
    TotalDuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
