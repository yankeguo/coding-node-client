# TeamIssueSortCondition

事项筛选条件

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFieldId** | **number** | 自定义字段 Id，Key 为 \&quot;CUSTOM\&quot; 时需设置该值，常规字段无需设置。 | [optional] [default to undefined]
**Key** | **string** | 筛选字段 KEY，可选值如下。  DEFECT_TYPE：缺陷类型;   REQUIREMENT_TYPE：需求类型;   MISSION_TYPE：任务类型;   PRIORITY; 优先级;   DUE_DATE：截止日期;   UPDATED_AT：更新时间;   CREATED_AT：创建时间;   START_DATE：开始日期;   ASSIGNEE：处理人;   CREATOR：创建者;  WATCHER：关注者;  MODULE：模块  LABEL：标签;  STATUS：状态;  STATUS_TYPE：状态类型;  KEYWORD：事项名称、CODE 模糊搜索  ISSUE_TYPE：事项类型;  ISSUE_SUB_TYPE：事项的子项类型;  WORKING_HOURS：预估工时  ITERATION：迭代;  PARENT：父需求;  CUSTOM：自定义字段，同时需指定 CustomFieldId | [default to '']
**Value** | **string** | 排序值, DESC/ASC | [optional] [default to '']

## Example

```typescript
import { TeamIssueSortCondition } from './api';

const instance: TeamIssueSortCondition = {
    CustomFieldId,
    Key,
    Value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
