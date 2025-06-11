# Test

测试任务信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedToId** | **number** | 处理人 ID | [optional] [default to undefined]
**CaseId** | **number** | 用例 ID | [optional] [default to undefined]
**Id** | **number** | 测试任务 ID | [optional] [default to undefined]
**IsCompleted** | **boolean** | 是否归档 | [optional] [default to false]
**Priority** | **number** | 优先级 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]
**Sort** | **number** | 排序 | [optional] [default to undefined]
**Status** | **string** | 状态 | [optional] [default to '']
**TestedAt** | **string** | 测试时间 | [optional] [default to '']
**Title** | **string** | 标题 | [optional] [default to '']

## Example

```typescript
import { Test } from './api';

const instance: Test = {
    AssignedToId,
    CaseId,
    Id,
    IsCompleted,
    Priority,
    SectionId,
    Sort,
    Status,
    TestedAt,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
