# DescribeCanMergeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**Source** | **string** | 源分支 | [default to undefined]
**Target** | **string** | 目标分支 | [default to undefined]
**DepotPath** | **string** | 仓库路径,与仓库Id二选一即可 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCanMergeRequest } from './api';

const instance: DescribeCanMergeRequest = {
    DepotId,
    Source,
    Target,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
