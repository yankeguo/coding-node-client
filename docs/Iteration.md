# Iteration

迭代信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **number** | 处理人 ID ，为 0 代表没有设置 | [optional] [default to undefined]
**Code** | **number** | 迭代编号，项目内唯一 | [optional] [default to undefined]
**CompletedCount** | **number** | 迭代中完成事项总数 | [optional] [default to undefined]
**CompletedPercent** | **number** | 迭代中事项完成比率 | [optional] [default to undefined]
**Completer** | **number** | 完成人 ID | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Creator** | **number** | 创建人 ID | [optional] [default to undefined]
**EndAt** | **number** | 结束时间，时间戳，-28800000 代表没有设置 | [optional] [default to undefined]
**Goal** | **string** | 迭代目标 | [optional] [default to '']
**Name** | **string** | 标题 | [optional] [default to '']
**ProcessingCount** | **number** | 迭代中进行中事项总数 | [optional] [default to undefined]
**StartAt** | **number** | 开始时间，时间戳，-28800000 代表没有设置 | [optional] [default to undefined]
**Starter** | **number** | 开始人 ID | [optional] [default to undefined]
**Status** | **string** | 迭代状态：WAIT_PROCESS,PROCESSING,COMPLETED | [optional] [default to '']
**UpdatedAt** | **number** | 修改时间 | [optional] [default to undefined]
**WaitProcessCount** | **number** | 迭代中待处理事项总数 | [optional] [default to undefined]

## Example

```typescript
import { Iteration } from './api';

const instance: Iteration = {
    Assignee,
    Code,
    CompletedCount,
    CompletedPercent,
    Completer,
    CreatedAt,
    Creator,
    EndAt,
    Goal,
    Name,
    ProcessingCount,
    StartAt,
    Starter,
    Status,
    UpdatedAt,
    WaitProcessCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
