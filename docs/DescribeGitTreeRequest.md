# DescribeGitTreeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**IsRecursive** | **boolean** | 是否递归 | [default to undefined]
**Path** | **string** | 文件路径 | [optional] [default to undefined]
**Ref** | **string** | 分支或标签名，默认 HEAD | [default to undefined]

## Example

```typescript
import { DescribeGitTreeRequest } from './api';

const instance: DescribeGitTreeRequest = {
    DepotId,
    DepotPath,
    IsRecursive,
    Path,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
