# DescribeDifferentBetween2CommitsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [optional] [default to 0]
**DepotPath** | **string** | 仓库路径，与DepotID二选一即可 | [optional] [default to 'codingcorp/test/depot']
**Path** | **string** | 文件路径 | [optional] [default to 'README.md']
**Source** | **string** | 源分支 | [optional] [default to 'master']
**Straight** | **boolean** | commit对比方式,是否直接对比差异 | [optional] [default to false]
**Target** | **string** | 目标分支 | [optional] [default to 'dev']

## Example

```typescript
import { DescribeDifferentBetween2CommitsRequest } from './api';

const instance: DescribeDifferentBetween2CommitsRequest = {
    DepotId,
    DepotPath,
    Path,
    Source,
    Straight,
    Target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
