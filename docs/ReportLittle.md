# ReportLittle

测试报告信息-简单

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **string** | 创建时间 | [optional] [default to '']
**Id** | **number** | ID 主键 | [optional] [default to undefined]
**Name** | **string** | 报告名称 | [optional] [default to '']
**StatisticsEndTime** | **string** | 数据统计结束时间 | [optional] [default to '']
**StatisticsStartTime** | **string** | 数据统计开始时间 | [optional] [default to '']
**Status** | **string** | 报告状态：CREATING 创建中，AVAILABLE 可用，UNAVAILABLE 不可用 | [optional] [default to '']
**Summary** | **string** | 报告总结 | [optional] [default to '']

## Example

```typescript
import { ReportLittle } from './api';

const instance: ReportLittle = {
    CreatedAt,
    Id,
    Name,
    StatisticsEndTime,
    StatisticsStartTime,
    Status,
    Summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
