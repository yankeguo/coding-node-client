# IssueSimpleData

事项基础信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**User**](User.md) |  | [optional] [default to undefined]
**Code** | **number** | 事项 Code | [optional] [default to undefined]
**IssueStatusId** | **number** | 事项状态 Id | [optional] [default to undefined]
**IssueStatusName** | **string** | 事项状态名称 | [optional] [default to '']
**IssueStatusType** | **string** | 事项状态类型：  TODO｜PROCESSING｜ COMPLETED | [optional] [default to '']
**IssueTypeDetail** | [**IssueTypeDetail**](IssueTypeDetail.md) |  | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to '']
**Priority** | **string** | 优先级：  \&quot;0\&quot; - 低，  \&quot;1\&quot; - 中，  \&quot;2\&quot; - 高，  \&quot;3\&quot; - 紧急，  \&quot;\&quot; - 未指定 | [optional] [default to '']
**Type** | **string** | 事项类型：  DEFECT - 缺陷，  REQUIREMENT - 需求，  MISSION - 任务，  EPIC - 史诗，  SUB_TASK - 子工作项 | [optional] [default to '']

## Example

```typescript
import { IssueSimpleData } from './api';

const instance: IssueSimpleData = {
    Assignee,
    Code,
    IssueStatusId,
    IssueStatusName,
    IssueStatusType,
    IssueTypeDetail,
    Name,
    Priority,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
