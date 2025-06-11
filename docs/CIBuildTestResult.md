# CIBuildTestResult

构建的测试结果

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Duration** | **number** | 时长 | [default to undefined]
**Empty** | **boolean** | 是否空 | [default to false]
**FailCount** | **number** | 失败次数 | [default to undefined]
**PassCount** | **number** | 通过次数 | [default to undefined]
**SkipCount** | **number** | 跳过次数 | [default to undefined]
**TotalCount** | **number** | 总次数 | [default to undefined]

## Example

```typescript
import { CIBuildTestResult } from './api';

const instance: CIBuildTestResult = {
    Duration,
    Empty,
    FailCount,
    PassCount,
    SkipCount,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
