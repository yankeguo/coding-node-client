# ModifyWorkItemSplitIssuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueCode** | **string** | 目标项目中的事项ID | [optional] [default to undefined]
**ProgramName** | **string** | 项目集名称 | [optional] [default to undefined]
**ProjectName** | **string** | 目标项目名称  | [optional] [default to undefined]
**Split** | **string** | true 表示分解， false 表示取消分解 | [optional] [default to undefined]
**WorkItemCode** | **number** | 页面上工作项ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyWorkItemSplitIssuesRequest } from './api';

const instance: ModifyWorkItemSplitIssuesRequest = {
    IssueCode,
    ProgramName,
    ProjectName,
    Split,
    WorkItemCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
