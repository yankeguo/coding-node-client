# DescribeIssueLogListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | **string** | 动作类型，ADD、CHANGE_PARENT、CREATE、DELETE、REMOVE、UPDATE。要获取更新处理人的日志，用UPDATE+ASSIGNEE，要获取更新迭代的日志，用UPDATE+ITERATION，要获取创建事项的日志，用CREATE+SELF，以此类推 | [optional] [default to '']
**IssueCode** | **number** | 事项code | [optional] [default to 0]
**ProjectName** | **string** | 项目名称 | [optional] [default to '']
**Target** | **string** | 操作对象，取值如下 ASSIGNEE  处理人，ATTACHMENT 附件，CHILD_ISSUE  子事项，CUSTOM_FIELD  自定义属性，DEFECT_TYPE 缺陷类型，DESCRIPTION 描述，DUE_DATE 截止日期，EPIC_ISSUE 所属史诗，ISSUE_EPIC_CHANGED ，ISSUE_PROGRAM_RELATION，ISSUE_RELATION，ITERATION 迭代，LABEL 标签，MODULE 模块，NAME 名字，PARENT_ISSUE 父事项，PRIORITY 优先级，PROGRESS 进度，RELATE_DEFECT，RELATE_REQUIREMENT，REQUIREMENT_TYPE，RESOURCE，SELF，START_DATE，STATUS 状态，STORY_POINT 故事点，THIRD_LINK 第三方链接，WATCHER 关注人，WORKING_HOURS 工时 | [optional] [default to '']

## Example

```typescript
import { DescribeIssueLogListRequest } from './api';

const instance: DescribeIssueLogListRequest = {
    ActionType,
    IssueCode,
    ProjectName,
    Target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
