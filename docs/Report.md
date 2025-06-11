# Report

测试报告信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | 附件列表 | [optional] [default to undefined]
**CreatedAt** | **string** | 创建时间 | [optional] [default to '']
**CreatedBy** | **number** | 创建人 | [optional] [default to undefined]
**Id** | **number** | ID 主键 | [optional] [default to undefined]
**IterationId** | **string** | 迭代 ID | [optional] [default to '']
**IterationName** | **string** | 迭代名称 | [optional] [default to '']
**Name** | **string** | 报告名称 | [optional] [default to '']
**ProjectName** | **string** | 项目名称 | [optional] [default to '']
**ReportOverview** | [**ReportOverview**](ReportOverview.md) |  | [optional] [default to undefined]
**RunIds** | **Array&lt;string&gt;** | 测试计划 ID | [optional] [default to undefined]
**RunNames** | **Array&lt;string&gt;** | 测试计划名称 | [optional] [default to undefined]
**StatisticsEndTime** | **string** | 数据统计结束时间 | [optional] [default to '']
**StatisticsStartTime** | **string** | 数据统计开始时间 | [optional] [default to '']
**Status** | **string** | 报告状态：CREATING 创建中，AVAILABLE 可用，UNAVAILABLE 不可用 | [optional] [default to '']
**Summary** | **string** | 报告总结 | [optional] [default to '']
**TemplateId** | **number** | 模板 ID | [optional] [default to undefined]

## Example

```typescript
import { Report } from './api';

const instance: Report = {
    Attachments,
    CreatedAt,
    CreatedBy,
    Id,
    IterationId,
    IterationName,
    Name,
    ProjectName,
    ReportOverview,
    RunIds,
    RunNames,
    StatisticsEndTime,
    StatisticsStartTime,
    Status,
    Summary,
    TemplateId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
