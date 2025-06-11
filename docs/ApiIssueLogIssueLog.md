# ApiIssueLogIssueLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | **string** | 动作类型, 取值包括如下：ADD、CHANGE_PARENT、CREATE、DELETE、REMOVE、UPDATE | [default to '']
**Content** | **string** | 内容，为转义后的JSON字符串 | [default to '']
**CreateAt** | **number** | 创建时间 | [default to 0]
**Creator** | **number** | 创建人 | [default to 0]
**IssueId** | **number** | 事项id | [default to 0]
**Target** | **string** | 操作对象，取值如下 ASSIGNEE  处理人，ATTACHMENT 附件，CHILD_ISSUE  子事项，CUSTOM_FIELD  自定义属性，DEFECT_TYPE 缺陷类型，DESCRIPTION 描述，DUE_DATE 截止日期，EPIC_ISSUE 所属史诗，ISSUE_EPIC_CHANGED ，ISSUE_PROGRAM_RELATION，ISSUE_RELATION，ITERATION 迭代，LABEL 标签，MODULE 模块，NAME 名字，PARENT_ISSUE 父事项，PRIORITY 优先级，PROGRESS 进度，RELATE_DEFECT，RELATE_REQUIREMENT，REQUIREMENT_TYPE，RESOURCE，SELF，START_DATE，STATUS 状态，STORY_POINT 故事点，THIRD_LINK 第三方链接，WATCHER 关注人，WORKING_HOURS 工时 | [default to '']
**TargetName** | **string** | 操作对象名 | [default to '']
**UpdatedAt** | **number** | 更新时间 | [default to 0]

## Example

```typescript
import { ApiIssueLogIssueLog } from './api';

const instance: ApiIssueLogIssueLog = {
    ActionType,
    Content,
    CreateAt,
    Creator,
    IssueId,
    Target,
    TargetName,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
