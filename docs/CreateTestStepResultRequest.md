# CreateTestStepResultRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Actual** | **string** | 该步骤的实际测试结果 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**Status** | **string** | 该任务的测试结果，可选值：UNTESTED:未测试,PASSED:通过,BLOCKED:阻塞,RETEST:重测,FAILED:失败 | [optional] [default to undefined]
**StepIndex** | **number** | 步骤的索引顺序，起始值为 1 | [default to undefined]
**StepStatus** | **string** | 该步骤的测试结果，可选值：PASSED:通过,FAILED:失败 | [default to undefined]
**TestId** | **number** | 测试任务 ID | [default to undefined]

## Example

```typescript
import { CreateTestStepResultRequest } from './api';

const instance: CreateTestStepResultRequest = {
    Actual,
    ProjectName,
    Status,
    StepIndex,
    StepStatus,
    TestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
