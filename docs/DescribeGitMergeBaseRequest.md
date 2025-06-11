# DescribeGitMergeBaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可  | [optional] [default to undefined]
**DestRef** | **string** | 分支2 | [default to undefined]
**SrcRef** | **string** | 分支1 | [default to undefined]

## Example

```typescript
import { DescribeGitMergeBaseRequest } from './api';

const instance: DescribeGitMergeBaseRequest = {
    DepotId,
    DepotPath,
    DestRef,
    SrcRef,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
