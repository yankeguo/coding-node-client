# DescribeGitMergeRequestsByShaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 与DepotId选择其一即可 | [optional] [default to undefined]
**Sha** | **string** | 提交 Id | [default to undefined]

## Example

```typescript
import { DescribeGitMergeRequestsByShaRequest } from './api';

const instance: DescribeGitMergeRequestsByShaRequest = {
    DepotId,
    DepotPath,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
