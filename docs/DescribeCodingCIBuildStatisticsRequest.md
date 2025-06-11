# DescribeCodingCIBuildStatisticsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndTime** | **string** | 结束时间 | [optional] [default to undefined]
**JobId** | **number** | MetricType 为 JOB 的时候使用该值，此时 ProjectId 可不传 | [optional] [default to undefined]
**MetricType** | **string** | 统计维度 Project 还是 JOB 目前只有 PROJECT | [optional] [default to undefined]
**Period** | **number** | 统计间隔单位秒 | [optional] [default to undefined]
**ProjectId** | **number** | MetricType 为 PROJECT 的时候使用该值，此时 JobId 可不传 | [optional] [default to undefined]
**StartTime** | **string** | 开始时间 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildStatisticsRequest } from './api';

const instance: DescribeCodingCIBuildStatisticsRequest = {
    EndTime,
    JobId,
    MetricType,
    Period,
    ProjectId,
    StartTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
