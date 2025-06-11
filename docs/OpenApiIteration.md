# OpenApiIteration

迭代信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllStoryPoint** | **number** | 全部故事点 | [optional] [default to undefined]
**Assignee** | **number** | 处理人 | [default to undefined]
**Code** | **number** | 迭代编号 | [default to undefined]
**CompletedCount** | **number** | 迭代中完成事项总数 | [default to undefined]
**CompletedPercent** | **number** | 迭代中事项完成比率 | [default to undefined]
**CompletedStoryPoint** | **number** | 已完成故事点 | [optional] [default to undefined]
**Completer** | **number** | 完成人 ID | [default to undefined]
**CreatedAt** | **number** | 创建时间 | [default to undefined]
**Creator** | **number** | 创建人id | [default to undefined]
**Deleter** | **number** | 删除人id | [default to undefined]
**EndAt** | **number** | 结束时间 | [default to undefined]
**Goal** | **string** | 迭代目标 | [default to '']
**Id** | **number** | 迭代id | [default to undefined]
**Name** | **string** | 迭代名称 | [default to '']
**ProcessStoryPoint** | **number** | 进行中的故事点 | [optional] [default to undefined]
**ProcessingCount** | **number** | 迭代中进行中事项总数 | [default to undefined]
**StartAt** | **number** | 开始时间，时间戳，-28800000 代表没有设置 | [default to undefined]
**Starter** | **number** | 开始人id | [default to undefined]
**Status** | **string** | 迭代状态：WAIT_PROCESS,PROCESSING,COMPLETED | [default to '']
**TodoStoryPoint** | **number** | 待处理故事点 | [optional] [default to undefined]
**UpdatedAt** | **number** | 更新时间 | [default to undefined]
**WaitProcessCount** | **number** | 迭代中待处理事项总数 | [default to undefined]

## Example

```typescript
import { OpenApiIteration } from './api';

const instance: OpenApiIteration = {
    AllStoryPoint,
    Assignee,
    Code,
    CompletedCount,
    CompletedPercent,
    CompletedStoryPoint,
    Completer,
    CreatedAt,
    Creator,
    Deleter,
    EndAt,
    Goal,
    Id,
    Name,
    ProcessStoryPoint,
    ProcessingCount,
    StartAt,
    Starter,
    Status,
    TodoStoryPoint,
    UpdatedAt,
    WaitProcessCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
