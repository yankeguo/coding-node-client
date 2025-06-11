# DescribeCodingCIBuildMetricsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndTime** | **string** | 结束时间 2020-11-20 | [default to undefined]
**ProjectId** | **number** | 项目 ID,Type 为 PROJECT 时必填 | [optional] [default to undefined]
**StartTime** | **string** | 开始时间 2020-11-10 | [default to undefined]
**Type** | **string** | 查询级别 PROJECT 级别，TEAM 级别，目前只支持 PROJECT | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildMetricsRequest } from './api';

const instance: DescribeCodingCIBuildMetricsRequest = {
    EndTime,
    ProjectId,
    StartTime,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
