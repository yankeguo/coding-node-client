# TeamIssueCondition

事项筛选条件

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConstValue** | **string** | 常量值  \&quot;UNSPECIFIC\&quot; 表示未指定，例如：处理人、需求类型、标签等字段，使用此值来筛选未指定处理人、需求类型或标签的事项。 | [optional] [default to '']
**CustomFieldId** | **number** | 自定义字段 Id，Key 为 \&quot;CUSTOM\&quot; 时需设置该值，常规字段无需设置。 | [optional] [default to undefined]
**Key** | **string** | 筛选字段 KEY，可选值如下。ISSUE_TYPE_ID: 具体的事项类型, 可以调用https://coding.net/help/openapi#/operations/DescribeTeamIssueTypeList获取, 多选; PROJECT: 项目/项目集 多选; DEFECT_TYPE：缺陷类型，多选; REQUIREMENT_TYPE：需求类型，多选; MISSION_TYPE：任务类型，多选; PRIORITY;  优先级，多选;DUE_DATE：截止日期，日期范围; UPDATED_AT：更新时间，日期范围; CREATED_AT：创建时间，日期范围; START_DATE：开始日期，日期范围; ASSIGNEE：处理人ID，多选; CREATOR：创建者ID，多选;WATCHER：关注者ID，多选;MODULE：模块，多选; LABEL：标签，多选;STATUS：状态，多选;STATUS_TYPE：状态类型，多选;KEYWORD：事项名称、CODE 模糊搜索;  ISSUE_SUB_TYPE：事项的子项类型，多选; WORKING_HOURS：预估工时，数值范围; ITERATION：迭代，多选; PARTICIPANT 经办人 多选; ASSOCIATE_PROGRAM 关联项目集 多选; ASSOCIATE_RELEASE 版本 多选; PROGRESS 进度 数字范围(例如: {start: \&quot;1\&quot;, end: \&quot;19\&quot;}); PARENT：父需求，多选;CUSTOM：自定义字段，同时需指定 CustomFieldId | [default to '']
**Value** | **string** | 筛选值，多选值用逗号隔开。日期格式: 2020-08-01，日期时间格式: 2020-08-01 12:00:00整数、小数、日期、日期时间类型的字段值应为一个范围，前后闭区间，范围开始值与结束值之间使用_连接，例如：0.1_5.0、2020-08-01_2020-08-31。Key为ITERATION时, Value为数据库ID | [optional] [default to '']

## Example

```typescript
import { TeamIssueCondition } from './api';

const instance: TeamIssueCondition = {
    ConstValue,
    CustomFieldId,
    Key,
    Value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
