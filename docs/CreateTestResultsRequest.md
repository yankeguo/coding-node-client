# CreateTestResultsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaseIds** | **Array&lt;number&gt;** | 测试用例 ID 数组 | [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**RunId** | **number** | 测试计划 ID | [default to undefined]
**Status** | **string** | 测试状态：UNTESTED:未测试,PASSED:通过,BLOCKED:阻塞,RETEST:重测,FAILED:失败 | [default to undefined]

## Example

```typescript
import { CreateTestResultsRequest } from './api';

const instance: CreateTestResultsRequest = {
    CaseIds,
    ProjectName,
    RunId,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
