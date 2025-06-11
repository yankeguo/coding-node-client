# DescribeGitFileStatRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotPath** | **string** | 仓库路径，格式：&lt;team&gt;/&lt;project&gt;/&lt;depot&gt; | [default to undefined]
**Path** | **string** | 文件路径 | [default to undefined]
**Ref** | **string** | tag | branch | commit | [default to undefined]

## Example

```typescript
import { DescribeGitFileStatRequest } from './api';

const instance: DescribeGitFileStatRequest = {
    DepotPath,
    Path,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
