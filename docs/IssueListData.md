# IssueListData

事项列表信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssigneeId** | **number** | 处理人 Id | [optional] [default to undefined]
**Code** | **number** | 事项 Code | [optional] [default to undefined]
**CompletedAt** | **number** | 完成时间时间戳 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间时间戳 | [optional] [default to undefined]
**CreatorId** | **number** | 创建人 Id | [optional] [default to undefined]
**CustomFields** | [**Array&lt;IssueCustomField&gt;**](IssueCustomField.md) | 自定义属性 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**DueDate** | **number** | 截止日期时间戳 | [optional] [default to undefined]
**IssueStatusId** | **number** | 状态 Id | [optional] [default to undefined]
**IssueStatusName** | **string** | 状态名称 | [optional] [default to '']
**IssueStatusType** | **string** | 状态类型：  TODO｜PROCESSING｜COMPLETED | [optional] [default to '']
**IssueTypeDetail** | [**IssueTypeDetail**](IssueTypeDetail.md) |  | [optional] [default to undefined]
**IssueTypeId** | **number** | 事项类型 ID | [optional] [default to undefined]
**Iteration** | [**IterationSimple**](IterationSimple.md) |  | [optional] [default to undefined]
**IterationId** | **number** | 迭代 Id | [optional] [default to undefined]
**Labels** | [**Array&lt;IssueProjectLabel&gt;**](IssueProjectLabel.md) | 事项标签 | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to '']
**ParentCode** | **number** | 父事项code | [optional] [default to undefined]
**ParentId** | **number** | 父事项ID | [optional] [default to undefined]
**ParentType** | **string** | 父事项类型：  DEFECT - 缺陷，  REQUIREMENT - 需求，  MISSION - 任务，  EPIC - 史诗 | [optional] [default to '']
**Priority** | **string** | 优先级：  \&quot;0\&quot; - 低，  \&quot;1\&quot; - 中，  \&quot;2\&quot; - 高，  \&quot;3\&quot; - 紧急，  \&quot;\&quot; - 未指定 | [optional] [default to '']
**StartDate** | **number** | 开始日期时间戳 | [optional] [default to undefined]
**StoryPoint** | **string** | 故事点，例如：\&quot;0.5\&quot;、\&quot;0\&quot;，  空字符串 \&quot;\&quot; 表示未指定 | [optional] [default to '']
**Type** | **string** | 事项类型：  DEFECT - 缺陷，  REQUIREMENT - 需求，  MISSION - 任务，  EPIC - 史诗，  SUB_TASK - 子工作项 | [optional] [default to '']
**UpdatedAt** | **number** | 修改时间时间戳 | [optional] [default to undefined]
**WorkingHours** | **number** | 工时（小时） | [optional] [default to undefined]
**Assignees** | [**Array&lt;User&gt;**](User.md) | 经办人列表 | [optional] [default to undefined]

## Example

```typescript
import { IssueListData } from './api';

const instance: IssueListData = {
    AssigneeId,
    Code,
    CompletedAt,
    CreatedAt,
    CreatorId,
    CustomFields,
    Description,
    DueDate,
    IssueStatusId,
    IssueStatusName,
    IssueStatusType,
    IssueTypeDetail,
    IssueTypeId,
    Iteration,
    IterationId,
    Labels,
    Name,
    ParentCode,
    ParentId,
    ParentType,
    Priority,
    StartDate,
    StoryPoint,
    Type,
    UpdatedAt,
    WorkingHours,
    Assignees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
