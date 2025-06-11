# IssueDetail

事项详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**User**](User.md) |  | [optional] [default to undefined]
**Code** | **number** | 事项 Code | [optional] [default to undefined]
**CompletedAt** | **number** | 完成时间戳 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**Creator** | [**User**](User.md) |  | [optional] [default to undefined]
**CustomFields** | [**Array&lt;CustomFields&gt;**](CustomFields.md) | 自定义属性列表 | [optional] [default to undefined]
**DefectType** | [**DefectType**](DefectType.md) |  | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**DueDate** | **number** | 截止日期时间戳 | [optional] [default to undefined]
**Epic** | [**Epic**](Epic.md) |  | [optional] [default to undefined]
**Files** | [**Array&lt;IssueFile&gt;**](IssueFile.md) | 附件列表 | [optional] [default to undefined]
**IssueStatusId** | **number** | 事项状态 Id | [optional] [default to undefined]
**IssueStatusName** | **string** | 事项状态名称 | [optional] [default to '']
**IssueStatusType** | **string** | 事项状态类型 | [optional] [default to '']
**IssueTypeDetail** | [**IssueTypeDetail**](IssueTypeDetail.md) |  | [optional] [default to undefined]
**IssueTypeId** | **number** | 事项类型 ID | [optional] [default to undefined]
**Iteration** | [**IterationSimple**](IterationSimple.md) |  | [optional] [default to undefined]
**IterationId** | **number** | 迭代 Id | [optional] [default to undefined]
**Labels** | [**Array&lt;IssueProjectLabel&gt;**](IssueProjectLabel.md) | 标签列表 | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to '']
**Parent** | [**IssueSimpleData**](IssueSimpleData.md) |  | [optional] [default to undefined]
**ParentType** | **string** | 父事项类型 | [optional] [default to '']
**Priority** | **string** | 优先级：  0 - 低，  1 - 中，  2 - 高，  3 - 紧急，  \&quot;\&quot; - 未指定 | [optional] [default to '']
**Project** | [**Project**](Project.md) |  | [optional] [default to undefined]
**ProjectModule** | [**IssueProjectModule**](IssueProjectModule.md) |  | [optional] [default to undefined]
**RequirementType** | [**RequirementType**](RequirementType.md) |  | [optional] [default to undefined]
**StartDate** | **number** | 开始日期时间戳 | [optional] [default to undefined]
**StoryPoint** | **string** | 故事点，例如：0.5、0、1  空字符串 \&quot;\&quot; 表示未指定。 | [optional] [default to '']
**SubTasks** | [**Array&lt;SubTask&gt;**](SubTask.md) | 子工作项列表 | [optional] [default to undefined]
**ThirdLinks** | [**Array&lt;IssueThirdLink&gt;**](IssueThirdLink.md) | 第三方链接列表 | [optional] [default to undefined]
**Type** | **string** | 事项类型：DEFECT - 缺陷，REQUIREMENT - 需求，MISSION - 任务，EPIC - 史诗，SUB_TASK - 子工作项, STORY - 用户故事 | [optional] [default to '']
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]
**Watchers** | [**Array&lt;User&gt;**](User.md) | 关注人列表 | [optional] [default to undefined]
**WorkingHours** | **number** | 工时（小时数） | [optional] [default to undefined]
**Assignees** | [**Array&lt;User&gt;**](User.md) | 经办人列表 | [optional] [default to undefined]

## Example

```typescript
import { IssueDetail } from './api';

const instance: IssueDetail = {
    Assignee,
    Code,
    CompletedAt,
    CreatedAt,
    Creator,
    CustomFields,
    DefectType,
    Description,
    DueDate,
    Epic,
    Files,
    IssueStatusId,
    IssueStatusName,
    IssueStatusType,
    IssueTypeDetail,
    IssueTypeId,
    Iteration,
    IterationId,
    Labels,
    Name,
    Parent,
    ParentType,
    Priority,
    Project,
    ProjectModule,
    RequirementType,
    StartDate,
    StoryPoint,
    SubTasks,
    ThirdLinks,
    Type,
    UpdatedAt,
    Watchers,
    WorkingHours,
    Assignees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
