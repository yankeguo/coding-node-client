# OpenApiWorkbenchIssue

工作台事项数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**User**](User.md) |  | [optional] [default to undefined]
**ChildCompletedCount** | **number** | 子 | [optional] [default to undefined]
**ChildCount** | **number** | 子 | [optional] [default to undefined]
**Code** | **number** | 事项code | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Creator** | [**User**](User.md) |  | [optional] [default to undefined]
**Description** | **boolean** | 描述 | [optional] [default to false]
**DueDate** | **number** | 截止时间 | [optional] [default to undefined]
**Epic** | [**Epic**](Epic.md) |  | [optional] [default to undefined]
**IssueStatus** | [**IssueStatus**](IssueStatus.md) |  | [optional] [default to undefined]
**IssueType** | [**IssueTypeDetail**](IssueTypeDetail.md) |  | [optional] [default to undefined]
**Iteration** | [**IterationSimple**](IterationSimple.md) |  | [optional] [default to undefined]
**Name** | **string** | 事项名称 | [optional] [default to '']
**ParentCode** | **number** | 父事项code | [optional] [default to undefined]
**ParentIssue** | [**IssueSimpleData**](IssueSimpleData.md) |  | [optional] [default to undefined]
**Priority** | **string** | 优先级 | [optional] [default to '']
**Project** | [**Project**](Project.md) |  | [optional] [default to undefined]
**ProjectId** | **number** | 项目ID | [optional] [default to undefined]
**SubTasks** | [**Array&lt;SubTask&gt;**](SubTask.md) | 子工作项 | [optional] [default to undefined]
**Type** | **string** | 事项类型 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]

## Example

```typescript
import { OpenApiWorkbenchIssue } from './api';

const instance: OpenApiWorkbenchIssue = {
    Assignee,
    ChildCompletedCount,
    ChildCount,
    Code,
    CreatedAt,
    Creator,
    Description,
    DueDate,
    Epic,
    IssueStatus,
    IssueType,
    Iteration,
    Name,
    ParentCode,
    ParentIssue,
    Priority,
    Project,
    ProjectId,
    SubTasks,
    Type,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
