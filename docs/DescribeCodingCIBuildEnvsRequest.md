# DescribeCodingCIBuildEnvsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildId** | **number** | 构建ID | [optional] [default to undefined]
**Type** | **string** | SYSTEM（系统内置环境变量） Param（触发构建输入环境变量） Env（构建计划填写环境变量） | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildEnvsRequest } from './api';

const instance: DescribeCodingCIBuildEnvsRequest = {
    BuildId,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
