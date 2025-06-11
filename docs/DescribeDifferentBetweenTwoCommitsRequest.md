# DescribeDifferentBetweenTwoCommitsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Path** | **string** | 文件位置 | [optional] [default to undefined]
**Source** | **string** | 源请求 Sha 值,分支名称 | [optional] [default to undefined]
**Target** | **string** | 目标请求 Sha 值,分支名称 | [optional] [default to undefined]

## Example

```typescript
import { DescribeDifferentBetweenTwoCommitsRequest } from './api';

const instance: DescribeDifferentBetweenTwoCommitsRequest = {
    DepotId,
    DepotPath,
    Path,
    Source,
    Target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
