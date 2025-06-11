# CreateCaseResultRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaseId** | **number** | 测试任务 ID | [default to undefined]
**CustomStepStatus** | **Array&lt;string&gt;** | 每一步的测试结果（步骤用例时需要本参数） | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**RunId** | **number** | 测试计划 ID | [default to undefined]
**Status** | **string** | 该任务的测试结果，可选值：UNTESTED:未测试,PASSED:通过,BLOCKED:阻塞,RETEST:重测,FAILED:失败 | [default to undefined]

## Example

```typescript
import { CreateCaseResultRequest } from './api';

const instance: CreateCaseResultRequest = {
    CaseId,
    CustomStepStatus,
    ProjectName,
    RunId,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
