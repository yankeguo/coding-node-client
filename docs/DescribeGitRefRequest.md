# DescribeGitRefRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Revision** | **string** | 分支名 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitRefRequest } from './api';

const instance: DescribeGitRefRequest = {
    DepotId,
    DepotPath,
    Revision,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
