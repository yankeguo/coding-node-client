# ArtifactVersionBean

制品版本实体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Description** | **string** | 版本描述 | [optional] [default to '']
**DownloadCount** | **number** | 下载量 | [optional] [default to undefined]
**Hash** | **string** | 版本哈希 | [optional] [default to '']
**Id** | **number** | 版本 ID | [optional] [default to undefined]
**PkgId** | **number** | 制品包 ID | [optional] [default to undefined]
**ReleaseStatus** | **number** | 发布状态：1-未发布;2-已发布 | [optional] [default to undefined]
**Size** | **number** | 版本大小（单位：MB） | [optional] [default to undefined]
**Version** | **string** | 版本号 | [optional] [default to '']

## Example

```typescript
import { ArtifactVersionBean } from './api';

const instance: ArtifactVersionBean = {
    CreatedAt,
    Description,
    DownloadCount,
    Hash,
    Id,
    PkgId,
    ReleaseStatus,
    Size,
    Version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
