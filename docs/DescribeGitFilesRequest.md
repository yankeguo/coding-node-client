# DescribeGitFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**Path** | **string** | 路径，不传即为根目录 | [optional] [default to undefined]
**Ref** | **string** | 分支名 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitFilesRequest } from './api';

const instance: DescribeGitFilesRequest = {
    DepotId,
    DepotPath,
    Path,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
