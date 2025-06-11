# ModifyIssueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssigneeId** | **number** | 处理人 Id | [optional] [default to undefined]
**Comment** | **string** | 评论 | [optional] [default to undefined]
**CustomFieldValues** | [**Array&lt;IssueCustomFieldForm&gt;**](IssueCustomFieldForm.md) | 自定义属性值列表 | [optional] [default to undefined]
**DefectTypeId** | **number** | 缺陷类型 Id | [optional] [default to undefined]
**DelFileIds** | **Array&lt;number&gt;** | 删除的文件 Id 列表 | [optional] [default to undefined]
**DelLabelIds** | **Array&lt;number&gt;** | 删除的标签 Id 列表 | [optional] [default to undefined]
**DelReleaseCodes** | **Array&lt;number&gt;** | 需要删除的版本jcode列表 | [optional] [default to undefined]
**DelWatcherIds** | **Array&lt;number&gt;** | 删除的事项关注人 Id 列表 | [optional] [default to undefined]
**DueDate** | **object** | 截止日期，格式：2021-01-01 | [optional] [default to undefined]
**FileIds** | **Array&lt;number&gt;** | 添加的文件 Id 列表 | [optional] [default to undefined]
**IssueCode** | **number** | 事项 Code | [optional] [default to undefined]
**IterationCode** | **number** | 迭代code | [optional] [default to undefined]
**LabelIds** | **Array&lt;number&gt;** | 标签 Id 列表 | [optional] [default to undefined]
**Name** | **string** | 事项名称 | [optional] [default to undefined]
**ParentCode** | **number** | 父事项 Code  敏捷模式：Type 为 SUB_TASK 时必须指定  经典模式：Type 为 MISSION、REQUIREMENT 时可指定 | [optional] [default to undefined]
**Priority** | **string** | 紧急程度  \&quot;0\&quot; - 低  \&quot;1\&quot; - 中  \&quot;2\&quot; - 高  \&quot;3\&quot; - 紧急 | [optional] [default to undefined]
**Progress** | **number** | 进度 | [optional] [default to undefined]
**ProjectModuleId** | **number** | 项目模块 Id | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**RecordHour** | [**IssueRecordHourForm**](IssueRecordHourForm.md) |  | [optional] [default to undefined]
**ReleaseCodes** | **Array&lt;number&gt;** | 版本code列表 | [optional] [default to undefined]
**RequirementTypeId** | **number** | 需求类型 Id | [optional] [default to undefined]
**StartDate** | **object** | 开始日期，格式：2021-01-01 | [optional] [default to undefined]
**StatusId** | **number** | 事项状态 Id | [optional] [default to undefined]
**StoryPoint** | **string** | 故事点，例如：0.5、1 | [optional] [default to undefined]
**UpdateLabelIds** | **Array&lt;number&gt;** | 标签 Id 列表 | [optional] [default to undefined]
**UpdateWatchers** | **Array&lt;number&gt;** | 关注人 Id 列表 | [optional] [default to undefined]
**WatcherIds** | **Array&lt;number&gt;** | 添加的事项关注人 Id 列表 | [optional] [default to undefined]
**WorkingHours** | **number** | 工时（小时数） | [optional] [default to undefined]

## Example

```typescript
import { ModifyIssueRequest } from './api';

const instance: ModifyIssueRequest = {
    AssigneeId,
    Comment,
    CustomFieldValues,
    DefectTypeId,
    DelFileIds,
    DelLabelIds,
    DelReleaseCodes,
    DelWatcherIds,
    DueDate,
    FileIds,
    IssueCode,
    IterationCode,
    LabelIds,
    Name,
    ParentCode,
    Priority,
    Progress,
    ProjectModuleId,
    ProjectName,
    RecordHour,
    ReleaseCodes,
    RequirementTypeId,
    StartDate,
    StatusId,
    StoryPoint,
    UpdateLabelIds,
    UpdateWatchers,
    WatcherIds,
    WorkingHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
