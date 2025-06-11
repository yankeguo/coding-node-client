# CreateTestResultRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomStepStatus** | **Array&lt;string&gt;** | 每一步的测试结果（步骤用例时需要本参数） | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**Status** | **string** | 该任务的测试结果，可选值：UNTESTED:未测试,PASSED:通过,BLOCKED:阻塞,RETEST:重测,FAILED:失败 | [optional] [default to undefined]
**TestId** | **number** | 测试任务 ID | [optional] [default to undefined]

## Example

```typescript
import { CreateTestResultRequest } from './api';

const instance: CreateTestResultRequest = {
    CustomStepStatus,
    ProjectName,
    Status,
    TestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
