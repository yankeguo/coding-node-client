# DescribeTestRunListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExecuteType** | **number** | 执行方式: 1-手动执行 2-自动化流水线执行 | [optional] [default to undefined]
**GitReleaseState** | **number** | 发布版本状态：0-未发布 1-已发布（与参数IterationId、IterationStatus、SectionId互斥） | [optional] [default to undefined]
**IsCompleted** | **boolean** | 是否已经归档 | [optional] [default to undefined]
**IterationId** | **Array&lt;number&gt;** | 迭代 ID（与参数IterationStatus、GitReleaseState、SectionId互斥） | [optional] [default to undefined]
**IterationStatus** | **Array&lt;string&gt;** | 迭代状态: WAIT_PROCESS、PROCESSING、COMPLETED（与参数IterationId、GitReleaseState、SectionId互斥） | [optional] [default to undefined]
**Keyword** | **string** | 计划名称 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID（与参数IterationId、IterationStatus、GitReleaseState互斥） | [optional] [default to undefined]
**State** | **number** | 状态: 0-未开始 1-进行中 2-已测完 | [optional] [default to undefined]

## Example

```typescript
import { DescribeTestRunListRequest } from './api';

const instance: DescribeTestRunListRequest = {
    ExecuteType,
    GitReleaseState,
    IsCompleted,
    IterationId,
    IterationStatus,
    Keyword,
    ProjectName,
    SectionId,
    State,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
