# PlanIterationIssueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueCode** | **Array&lt;number&gt;** | 需要规划的事项编号列表 | [default to undefined]
**IterationCode** | **number** | 迭代编号，将事项移出迭代请传 0 | [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**SingleMode** | **boolean** | 单个事项移动模式，即未规划的子事项的迭代跟随传入的事项一同规划，否则仅规划传入的事项 | [optional] [default to undefined]

## Example

```typescript
import { PlanIterationIssueRequest } from './api';

const instance: PlanIterationIssueRequest = {
    IssueCode,
    IterationCode,
    ProjectName,
    SingleMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
