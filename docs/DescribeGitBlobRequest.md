# DescribeGitBlobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlobSha** | **string** | Blob ID | [default to undefined]
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitBlobRequest } from './api';

const instance: DescribeGitBlobRequest = {
    BlobSha,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
