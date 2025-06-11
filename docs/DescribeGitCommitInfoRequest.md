# DescribeGitCommitInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 与DepotId二选一即可 | [optional] [default to undefined]
**Sha** | **string** | 请求的sha值 | [default to undefined]

## Example

```typescript
import { DescribeGitCommitInfoRequest } from './api';

const instance: DescribeGitCommitInfoRequest = {
    DepotId,
    DepotPath,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
