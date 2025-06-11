# TestFull

测试任务详细信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedToId** | **number** | 处理人 ID | [optional] [default to undefined]
**Case** | [**Case**](Case.md) |  | [optional] [default to undefined]
**CaseId** | **number** | 用例 ID | [optional] [default to undefined]
**Id** | **number** | 测试任务 ID | [optional] [default to undefined]
**IsCompleted** | **boolean** | 是否归档 | [optional] [default to false]
**Priority** | **number** | 优先级 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]
**SectionPath** | **Array&lt;string&gt;** | 用例所属分组（按层级由上到下排序） | [optional] [default to undefined]
**Sort** | **number** | 排序 | [optional] [default to undefined]
**Status** | **string** | 状态 | [optional] [default to '']
**TestedAt** | **string** | 测试时间 | [optional] [default to '']
**TestedBy** | **number** | 测试人 ID | [optional] [default to undefined]
**Title** | **string** | 标题 | [optional] [default to '']

## Example

```typescript
import { TestFull } from './api';

const instance: TestFull = {
    AssignedToId,
    Case,
    CaseId,
    Id,
    IsCompleted,
    Priority,
    SectionId,
    SectionPath,
    Sort,
    Status,
    TestedAt,
    TestedBy,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
