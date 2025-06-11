# DescribeGitBlobRawRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlobSha** | **string** | Blob ID | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitBlobRawRequest } from './api';

const instance: DescribeGitBlobRawRequest = {
    BlobSha,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
