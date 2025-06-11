# OpenApiRelease

open-api 版本数据类型

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **number** | 处理人 | [optional] [default to undefined]
**Code** | **number** | 版本code | [optional] [default to undefined]
**CompletedCount** | **number** | 已完成事项数目  | [optional] [default to undefined]
**CompletedPercent** | **number** | 事项完成率  | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Creator** | **number** | 创建人 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**Id** | **number** | 版本ID | [optional] [default to undefined]
**Iterations** | [**Array&lt;IterationSimple&gt;**](IterationSimple.md) | 版本关联迭代列表  | [optional] [default to undefined]
**Name** | **string** | 版本名称 | [optional] [default to '']
**ProcessingCount** | **number** | 处理中事项数目  | [optional] [default to undefined]
**ProjectId** | **number** | 项目ID | [optional] [default to undefined]
**ReleaseDate** | **number** | 发表日期 | [optional] [default to undefined]
**StartDate** | **number** | 开始日期 | [optional] [default to undefined]
**Status** | **string** | 状态 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**WaitProcessCount** | **number** | 待处理事项数目  | [optional] [default to undefined]

## Example

```typescript
import { OpenApiRelease } from './api';

const instance: OpenApiRelease = {
    Assignee,
    Code,
    CompletedCount,
    CompletedPercent,
    CreatedAt,
    Creator,
    Description,
    Id,
    Iterations,
    Name,
    ProcessingCount,
    ProjectId,
    ReleaseDate,
    StartDate,
    Status,
    UpdatedAt,
    WaitProcessCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
