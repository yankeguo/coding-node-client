# CreateIssueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssigneeId** | **number** | 处理人 Id | [optional] [default to undefined]
**CustomFieldValues** | [**Array&lt;IssueCustomFieldForm&gt;**](IssueCustomFieldForm.md) | 自定义属性值列表 | [optional] [default to undefined]
**DefectTypeId** | **number** | 缺陷类型 Id | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to undefined]
**DueDate** | **object** | 截止日期，格式：2021-01-01 | [optional] [default to undefined]
**EpicCode** | **number** | 史诗 Code，Type 为 EPIC 或 SUB_TASK时，不传该值 | [optional] [default to undefined]
**FileIds** | **Array&lt;number&gt;** | 附件的文件 Id 列表 | [optional] [default to undefined]
**IssueTypeId** | **number** | 事项类型 Id | [optional] [default to undefined]
**IterationCode** | **number** | 迭代 Code，Type 为 EPIC 或 SUB_TASK时，忽略该值 | [optional] [default to undefined]
**LabelIds** | **Array&lt;number&gt;** | 标签 Id 列表 | [optional] [default to undefined]
**Name** | **string** | 事项名称 | [optional] [default to undefined]
**ParentCode** | **number** | 父事项 Code  敏捷模式：Type 为 SUB_TASK 时必须指定  经典模式：Type 为 MISSION、REQUIREMENT 时可指定 | [optional] [default to undefined]
**Priority** | **string** | 紧急程度  \&quot;0\&quot; - 低  \&quot;1\&quot; - 中  \&quot;2\&quot; - 高  \&quot;3\&quot; - 紧急 | [optional] [default to undefined]
**ProjectModuleId** | **number** | 项目模块 Id | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**ReleaseCodes** | **Array&lt;number&gt;** | 版本code列表 | [optional] [default to undefined]
**RequirementTypeId** | **number** | 需求类型 Id | [optional] [default to undefined]
**StartDate** | **object** | 开始日期，格式：2021-01-01 | [optional] [default to undefined]
**StatusId** | **number** | 事项状态 Id | [optional] [default to undefined]
**StoryPoint** | **string** | 故事点，例如：0.5、1 | [optional] [default to undefined]
**TargetSortCode** | **number** | 排序目标位置的事项 code  可不填，排在底位 | [optional] [default to undefined]
**ThirdLinks** | [**Array&lt;IssueThirdLinkForm&gt;**](IssueThirdLinkForm.md) | 第三方链接列表 | [optional] [default to undefined]
**Type** | **string** | 事项类型  DEFECT - 缺陷  REQUIREMENT - 需求  MISSION - 任务  EPIC - 史诗  SUB_TASK - 子任务 | [optional] [default to undefined]
**WatcherIds** | **Array&lt;number&gt;** | 关注人 Id 列表 | [optional] [default to undefined]
**WorkingHours** | **number** | 工时（小时数） | [optional] [default to undefined]

## Example

```typescript
import { CreateIssueRequest } from './api';

const instance: CreateIssueRequest = {
    AssigneeId,
    CustomFieldValues,
    DefectTypeId,
    Description,
    DueDate,
    EpicCode,
    FileIds,
    IssueTypeId,
    IterationCode,
    LabelIds,
    Name,
    ParentCode,
    Priority,
    ProjectModuleId,
    ProjectName,
    ReleaseCodes,
    RequirementTypeId,
    StartDate,
    StatusId,
    StoryPoint,
    TargetSortCode,
    ThirdLinks,
    Type,
    WatcherIds,
    WorkingHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
